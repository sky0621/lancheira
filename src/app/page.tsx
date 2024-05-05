import { Col, Row } from "antd";
import { Header } from "@/app/_components/Header";
import { Content } from "@/app/_components/Content";
import { Layout } from "@/app/_components/Layout";

const Home = () => {
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
              <div>a</div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </main>
  );
};

export default Home;
