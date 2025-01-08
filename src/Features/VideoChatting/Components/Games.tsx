import { ContainerScroll } from "../../../components/ui/container-scroll-animation";

const Games = () => {
  return (
    <div>
      <ContainerScroll titleComponent={<h1>Games Section</h1>}>
        <p>Here is some content for the games section!</p>
      </ContainerScroll>
    </div>
  );
};

export default Games;
