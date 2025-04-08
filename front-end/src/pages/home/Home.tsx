import Contact from "./Components/Contact";
import { About } from "./Components/About";
import { Service } from "./Components/Service";
import { Header } from "../../layout/HeaderBar";
import { Container } from "../../components/Container";
import { HyperLink } from "../../components/HyperLink";
import { Icon } from "../../components/Icon";
import Modal from "../../components/Modal";
import { ActionButton } from "../../components/ActionButton";
import { useModalState } from "../../hooks/userModalState";
import { Title } from "../../components/Title";
import { Text } from "../../components/Text";

function Home() {
  const { open, openModal, closeModal } = useModalState();

  const listService = [
    {
      srcImg: "/public/img/Servico1.png",
      type: "serviço 1",
      cost: "R$ 55,00",
    },
    {
      srcImg: "/public/img/Servico2.png",
      type: "serviço 2",
      cost: "R$ 70,00",
    },
    {
      srcImg: "/public/img/Servico3.png",
      type: "serviço 3",
      cost: "R$ 90,00",
    },
  ];

  return (
    <>
      <div className="text-ml">
        <Header>
          <Container className="flex items-center justify-center">
            <HyperLink href="#contact">
              <Icon src={"/public/img/baberShop-Icon.png"} />
            </HyperLink>
            <HyperLink href="#about">Sobre</HyperLink>
            <HyperLink href="#service">Serviços</HyperLink>
          </Container>
          <ActionButton onClick={openModal}>Agendar</ActionButton>
        </Header>

        <Contact id="contact">
          <Contact.Container>
            <Title>
              ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE
            </Title>
            <Text>Horário de funcionamento das 08:00 às 19:00</Text>
            <ActionButton onClick={openModal}>Agendar</ActionButton>
          </Contact.Container>
        </Contact>

        <Modal open={open} closeModal={closeModal} />

        <About.Root id="about">
          <About.Containers>
            <About.Container className="flex h-full flex-col justify-center content-center  w-2/3">
              <About.Img src={"public/img/RectangleAll.png"} />
            </About.Container>
            <About.Container className="flex h-full flex-col justify-center content-center p-6 w-1/3">
              <About.Title>Sobre</About.Title>
              <About.Text>
                A BarberShop é um espaço dedicado ao cuidado masculino, onde a
                tradição da barbearia se encontra com as tendências atuais. Com
                um ambiente aconchegante e sofisticado, a BarberShop oferece uma
                experiência única para seus clientes.
              </About.Text>
              <About.Info>
                Horário de funcionamento das 08:00 às 19:00
              </About.Info>
            </About.Container>
          </About.Containers>
        </About.Root>

        <Service.Root id="service">
          <Service.Container className="h-1/2 p-32 text-center items-center">
            <Service.Title>Serciços</Service.Title>
            <Service.Detail>
              A BarberShop é um verdadeiro refúgio para o homem moderno,
              oferecendo uma gama completa de serviços para cuidar da aparência
              e do bem-estar.
            </Service.Detail>
          </Service.Container>
          <Service.Container className="h-1/2 flex">
            {listService.map((service, index) => (
              <Service.Card.Root key={index}>
                <Service.Card.Img src={service.srcImg} />
                <Service.Card.Description>
                  <Service.Card.Type children={service.type} />
                  <Service.Card.Cost children={service.cost} />
                </Service.Card.Description>
              </Service.Card.Root>
            ))}
          </Service.Container>
        </Service.Root>

        <div className="h-20">Aqui</div>
      </div>
    </>
  );
}

export default Home;
