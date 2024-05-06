import { Col, Image, Row } from "antd";
import { Header } from "@/app/_components/Header";
import { Content } from "@/app/_components/Content";
import { Layout } from "@/app/_components/Layout";
import { cld } from "@/lib/cloudinary";

const Home = () => {
  const img1 = cld.image("v1714892528/lancheira/20221222_llryw2");
  console.info(img1);
  console.info(img1.toURL());
  return (
    <main>
      <Layout>
        <Header>Box Lunch</Header>
        <Content>
          <Row>
            <Col
              xs={{ flex: "100%" }}
              sm={{ flex: "50%" }}
              md={{ flex: "40%" }}
              lg={{ flex: "20%" }}
              xl={{ flex: "10%" }}
            >
              <Image src={img1.toURL()} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </main>
  );
};

export default Home;
