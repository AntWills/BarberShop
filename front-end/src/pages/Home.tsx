import { Contact } from "../components/Contact/index";
import { NavegationBar } from "../components/NavegationBar/index";
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
      </div>
    </>
  );
}

export default Home;
