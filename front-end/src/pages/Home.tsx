import { Contact } from "../components/Contact/index";
import { NavegationBar } from "../components/NavegationBar/index";
import { About } from "../components/About/index";
import Icon from "../assets/baberShop-Icon.png";

function Home() {
  return (
    <>
      <div className="">
        <NavegationBar.Root>
          <NavegationBar.Containers>
            <NavegationBar.Container>
              <NavegationBar.Icon src={Icon} />
              <NavegationBar.NavButton onClick={() => console.log("Olá")}>
                Sobre
              </NavegationBar.NavButton>
              <NavegationBar.NavButton>Serviços</NavegationBar.NavButton>
              <NavegationBar.NavButton>Quem Somos</NavegationBar.NavButton>
              <NavegationBar.NavButton>Contatos</NavegationBar.NavButton>
            </NavegationBar.Container>
            <NavegationBar.Container>
              <NavegationBar.NavButton>Agendar</NavegationBar.NavButton>
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
            <About.Container>Teste</About.Container>
            <About.Container>
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
