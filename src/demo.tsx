import React from "react";
import { Renderer, Text, ScrollArea, Window, View, Button } from "./index";
import { GridView } from "./components/GridView";
import { GridRow } from "./components/GridView/GridRow";
import { GridColumn } from "./components/GridView/GridColumn";

const App = () => {
  return (
    <Window>
      {/* <ScrollArea>
        <Text>
          {`
            Contrary to popular belief, 
            Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
            and going through the cites of the word in classical literature, 
            discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 
            and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
            This book is a treatise on the theory of ethics, very popular during the Renaissance. 
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            The standard chunk of Lorem Ipsum used since the 1500s
            is reproduced below for those interested. 
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also 
            reproduced in their exact original form, accompanied 
            by English versions from the 1914 translation by H. Rackham.


            Why do we use it?

            It is a long established 
            fact that a reader will be distracted by 
            the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has 
            a more-or-less normal distribution of letters, 
            as opposed to using 'Content here, content here', 
            making it look like readable English. 
            Many desktop publishing packages and web page 
            editors now use Lorem Ipsum as their default model text, 
            and a search for 'lorem ipsum' will uncover many web 
            sites still in their infancy. Various versions 
            have evolved over the years, sometimes by accident, 
            sometimes on purpose (injected humour and the like).

        `}
        </Text>
      </ScrollArea> */}
      {/* <View> */}
      <GridView
        style="flex: 1"
        columnProps={{
          0: {
            minWidth: 200,
          },
          1: {
            minWidth: 300,
          },
        }}
        rowProps={{
          0: {
            stretch: 2,
            minHeight: 400,
          },
        }}
      >
        <GridRow>
          <GridColumn width={2}>
            <View style="background-color: red">
              <Text>Hello</Text>
            </View>
          </GridColumn>
          <GridColumn width={2}>
            <View style="background-color: blue">
              <Text>Second Column</Text>
            </View>
          </GridColumn>
        </GridRow>
        <GridRow height={2}>
          <GridColumn>
            <View style="background-color: green">
              <Text>Second row</Text>
            </View>
          </GridColumn>
          <GridColumn>
            <View style="background-color: purple">
              <Text>Second Column</Text>
            </View>
          </GridColumn>
          <GridColumn>
            <View style="background-color: purple">
              <Text>Third Column</Text>
            </View>
          </GridColumn>
          <GridColumn>
            <View style="background-color: purple">
              <Text>Fourth Column</Text>
            </View>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <Text>Third row</Text>
          </GridColumn>
        </GridRow>
      </GridView>
      {/* <Button text="Button" />
      </View> */}
    </Window>
  );
};

Renderer.render(<App />);
