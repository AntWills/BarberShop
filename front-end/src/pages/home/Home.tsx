import { Contact } from "./sections/Contact";
import { About } from "./sections/About";
import { Service } from "./sections/Service";
import IconImg from "../../assets/baberShop-Icon.png";
import Reta10 from "../../assets/Rectangle10.png";
import Reta11 from "../../assets/Rectangle11.png";
import Reta12 from "../../assets/Rectangle12.png";
import serviceImg1 from "../../assets/Servico1.png";
import serviceImg2 from "../../assets/Servico2.png";
import serviceImg3 from "../../assets/Servico3.png";
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
      srcImg: serviceImg1,
      type: "serviço 1",
      cost: "R$ 55,00",
    },
    {
      srcImg: serviceImg3,
      type: "serviço 2",
      cost: "R$ 70,00",
    },
    {
      srcImg: serviceImg2,
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
              <Icon src={IconImg} />
            </HyperLink>
            <HyperLink href="#about">Sobre</HyperLink>
            <HyperLink href="#service">Serviços</HyperLink>
          </Container>
          <ActionButton onClick={openModal}>Agendar</ActionButton>
        </Header>

        <Contact.Root id="contact">
          <Contact.Container>
            <Title>
              ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE
            </Title>
            <Text>Horário de funcionamento das 08:00 às 19:00</Text>
            <ActionButton onClick={openModal}>Agendar</ActionButton>
          </Contact.Container>
        </Contact.Root>

        <Modal open={open} closeModal={closeModal} />

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
