import { Contact } from "../components/Contact";
import { NavegationBar } from "../components/NavegationBar/index";

function Home() {
  return (
    <>
      <div className="bg-[#0D121E] font-[Poppins]">
        <NavegationBar.Root>
          <NavegationBar.ActionButton>Sobre</NavegationBar.ActionButton>
          <NavegationBar.ActionButton>Serviços</NavegationBar.ActionButton>
          <NavegationBar.ActionButton>Quem Somos</NavegationBar.ActionButton>
          <NavegationBar.ActionButton>Contatos</NavegationBar.ActionButton>
        </NavegationBar.Root>
        <Contact.Root>
          <Contact.Title>
            ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE
          </Contact.Title>
          <Contact.Caption>
            Horário de funcionamento das 08:00 às 19:00
          </Contact.Caption>
        </Contact.Root>
      </div>
    </>
  );
}

export default Home;
