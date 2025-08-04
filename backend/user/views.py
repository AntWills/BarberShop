from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import api_view, APIView
from rest_framework import status
from .models import User
from .serializers import UserSerializer


class UserView(APIView):
    def get(self, request: Request):
        users = User.objects.all()

        serializer = UserSerializer(users, many=True)

        return Response(serializer.data)

    def post(self, request: Request):
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

        return Response(
            UserSerializer(user).data,
            status=status.HTTP_201_CREATED
        )


class UserDetailView(APIView):
    def get(self, request, user_id: int):
        user = User.objects.get(pk=user_id)
        return Response(UserSerializer(user).data)
