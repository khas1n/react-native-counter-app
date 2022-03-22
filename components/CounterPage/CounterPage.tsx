import { Center, VStack, Box, Heading, Stack, Button } from "native-base";
import React from "react";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selectors";
import { counterActions } from "../../services/counter/slice";
import ToggleDarkMode from "../ToggleDarkMode";

const CounterPage: React.FC = () => {
  const { increment, incrementByAmount, decrement, toggleCounter } = useActions<typeof counterActions>(counterActions);
  const countValue = useTypedSelector(({ counter: { value } }) => value);
  const showCounterValue = useTypedSelector(({ counter: { showCounter } }) => showCounter);
  return (
    <Center _dark={{ bg: "indigo.900" }} _light={{ bg: "indigo.50" }} px={4} flex={1}>
      <VStack space={5} alignItems="center" width="100%">
        <Box _dark={{ bg: "indigo.600" }} _light={{ bg: "white" }} borderRadius="md" width="100%">
          <VStack space="4" p={4}>
            <Box alignItems="center">
              <Heading size="lg">Counter App</Heading>
            </Box>
            {showCounterValue && (
              <Box p="4" alignItems="center">
                <Heading color={"primary.500"} size="xl">
                  {countValue}
                </Heading>
              </Box>
            )}
            <Stack direction="row" justifyContent="center" alignItems="center" flexWrap={"wrap"}>
              <Button m={2} onPress={() => increment()}>
                Increment
              </Button>
              <Button m={2} onPress={() => incrementByAmount(10)}>
                Increase by 10
              </Button>
              <Button m={2} onPress={() => decrement()}>
                Decrement
              </Button>
              <Button m={2} onPress={() => toggleCounter()}>
                Toggle Counter
              </Button>
            </Stack>
          </VStack>
        </Box>
        <ToggleDarkMode />
      </VStack>
    </Center>
  );
};

export default CounterPage;
