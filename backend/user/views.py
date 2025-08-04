from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import APIView
from rest_framework import status
from .models import User
from .serializers import UserSerializer

# Create your views here.


class UserViweCrud(APIView):
    def get(self, request: Request, format=None):
        users = User.objects.all()

        serializer = UserSerializer(users, many=True)

        return Response(serializer.data)

    def post(self, request: Request, format=None):
        serializer = UserSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                {
                    "error": "Dados inválidos",
                    "details": serializer.errors
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        user = serializer.save()
        # Serialize o user antes de retornar
        return Response(
            UserSerializer(user).data,
            status=status.HTTP_201_CREATED
        )
    pass


# @api_view(['GET'])
# def getData(request: Request):
#     name = request.query_params.get("name")

#     if not name:
#         return Response("Nome não enviado")
#     data = {
#         "name": name
#     }
#     return Response(data)


# @api_view(["POST"])
# def createData(request: Request):
#     print(request.data)
#     return Response("OK")
