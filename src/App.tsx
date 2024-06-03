import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "menu"`, lg: `"nav nav" "aside menu"` }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"gold"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={"menu"} bg={"dodgerblue"}>
          Menu
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
