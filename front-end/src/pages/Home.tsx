import { NavegationBar } from "../components/NavegationBar";
import { Contact } from "../components/Contact";
import { About } from "../components/About";
import { Service } from "../components/Service";
import Icon from "../assets/baberShop-Icon.png";
import Reta10 from "../assets/Rectangle10.png";
import Reta11 from "../assets/Rectangle11.png";
import Reta12 from "../assets/Rectangle12.png";
import serviceImg1 from "../assets/Servico1.png";
import serviceImg2 from "../assets/Servico2.png";
import serviceImg3 from "../assets/Servico3.png";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (idSection: string) => {
    window.location.hash = idSection;
  };
  return (
    <>
      {/* <div className=""> */}
      <NavegationBar.Root>
        <NavegationBar.Containers>
          <NavegationBar.Container>
            <NavegationBar.Button onClick={() => navigateTo("contact")}>
              <NavegationBar.Icon src={Icon} className="w-10 h-auto" />
            </NavegationBar.Button>
            <NavegationBar.Button onClick={() => navigateTo("about")}>
              Sobre
            </NavegationBar.Button>
            <NavegationBar.Button onClick={() => navigateTo("service")}>
              Serviços
            </NavegationBar.Button>
            <NavegationBar.Button>Quem Somos</NavegationBar.Button>
            <NavegationBar.Button>Contatos</NavegationBar.Button>
          </NavegationBar.Container>
          <NavegationBar.Container>
            <NavegationBar.Button>Agendar</NavegationBar.Button>
          </NavegationBar.Container>
        </NavegationBar.Containers>
      </NavegationBar.Root>

      <Contact.Root id="contact">
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

      <About.Root id="about">
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
              tradição da barbearia se encontra com as tendências atuais. Com um
              ambiente aconchegante e sofisticado, a BarberShop oferece uma
              experiência única para seus clientes.
            </About.Detail>
            <About.Info>Horário de funcionamento das 08:00 às 19:00</About.Info>
          </About.Container>
        </About.Containers>
      </About.Root>

      <Service.Root id="service">
        <Service.Container className="h-1/2 p-32">
          <Service.Title>Serciços</Service.Title>
          <Service.Detail>
            A BarberShop é um verdadeiro refúgio para o homem moderno,
            oferecendo uma gama completa de serviços para cuidar da aparência e
            do bem-estar.
          </Service.Detail>
        </Service.Container>
        <Service.Container className="h-1/2 flex">
          <Service.Card>
            <Service.Img
              src={serviceImg1}
              className="w-72 h-auto object-cover"
            />
            <Service.Container className="flex justify-between p-4">
              <p>Serviço 1</p>
              <p>R$ 55,00</p>
            </Service.Container>
          </Service.Card>

          <Service.Card>
            <Service.Img
              src={serviceImg3}
              className="w-72 h-auto object-cover"
            />
            <Service.Container className="flex justify-between p-4">
              <p>Serviço 1</p>
              <p>R$ 75,00</p>
            </Service.Container>
          </Service.Card>

          <Service.Card>
            <Service.Img
              src={serviceImg2}
              className="w-72 h-auto object-cover"
            />
            <Service.Container className="flex justify-between p-4">
              <p>Serviço 1</p>
              <p>R$ 90,00</p>
            </Service.Container>
          </Service.Card>
        </Service.Container>
      </Service.Root>

      <div className="h-20">Aqui</div>
      {/* </div> */}
    </>
  );
}

export default Home;
