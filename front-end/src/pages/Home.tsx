import { Contact } from "../components/Contact/index";
import { NavegationBar } from "../components/NavBar/index";
import { About } from "../components/About/index";
import Icon from "../assets/baberShop-Icon.png";
import Reta10 from "../assets/Rectangle10.png";
import Reta11 from "../assets/Rectangle11.png";
import Reta12 from "../assets/Rectangle12.png";

function Home() {
  return (
    <>
      <div className="">
        <NavegationBar.Root>
          <NavegationBar.Containers>
            <NavegationBar.Container>
              <NavegationBar.Icon src={Icon} />
              <NavegationBar.Button onClick={() => console.log("Olá")}>
                Sobre
              </NavegationBar.Button>
              <NavegationBar.Button>Serviços</NavegationBar.Button>
              <NavegationBar.Button>Quem Somos</NavegationBar.Button>
              <NavegationBar.Button>Contatos</NavegationBar.Button>
            </NavegationBar.Container>
            <NavegationBar.Container>
              <NavegationBar.Button>Agendar</NavegationBar.Button>
            </NavegationBar.Container>
          </NavegationBar.Containers>
        </NavegationBar.Root>

        <Contact.Root>
          <Contact.Container>
            <Contact.Title>
              ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE
            </Contact.Title>
            <Contact.Caption>
              Horário de funcionamento das 08:00 às 19:00
            </Contact.Caption>
            <Contact.ActionButton>Agendar</Contact.ActionButton>
          </Contact.Container>
        </Contact.Root>

        <About.Root>
          <About.Containers>
            <About.Container className="flex h-full flex-col justify-center content-center  w-2/3">
              <About.ContainerImg>
                <img
                  src={Reta10}
                  alt=""
                  className="absolute top-30 left-1/4 object-cover z-30"
                />
                <img
                  src={Reta11}
                  alt=""
                  className="absolute bottom-20 right-1/4 object-cover z-20"
                />
                <img
                  src={Reta12}
                  alt=""
                  className="absolute bottom-25 left-10 object-cover z-10"
                />
              </About.ContainerImg>
            </About.Container>
            <About.Container className="flex h-full flex-col justify-center content-center  w-1/3">
              <About.Title>Sobre</About.Title>
              <About.Detail>
                A BarberShop é um espaço dedicado ao cuidado masculino, onde a
                tradição da barbearia se encontra com as tendências atuais. Com
                um ambiente aconchegante e sofisticado, a BarberShop oferece uma
                experiência única para seus clientes.
              </About.Detail>
              <About.Info>
                Horário de funcionamento das 08:00 às 19:00
              </About.Info>
            </About.Container>
          </About.Containers>
        </About.Root>
      </div>
    </>
  );
}

export default Home;
