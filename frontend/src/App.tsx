import {
    Box,
    Heading,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Textarea,
    Text,
    Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";

const App = () => {
    const [inputSentence, setInputSentence] = useState<string>("السلام عليكم");
    const [fontSize, setFontSize] = useState<number>(20);
    const [showTooltip, setShowTooltip] = useState<boolean>(false);

    return (
        <>
            <Box
                p={10}
                h="100vh"
                gap={10}
                bg="gray.100"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Heading size="2xl">Naskh-Nastaliq Conversion</Heading>
                <Box gap={10} width="80%" display="flex" flexDirection="column">
                    <Textarea
                        bg="white"
                        padding={3}
                        fontFamily="Noto Naskh Arabic"
                        h={150}
                        fontSize={fontSize}
                        value={inputSentence}
                        onChange={(e) => setInputSentence(e.target.value)}
                        resize="none"
                    />
                    <Textarea
                        bg="white"
                        padding={6}
                        fontFamily="Noto Nastaliq Urdu"
                        h={150}
                        fontSize={fontSize}
                        value={inputSentence}
                        resize="none"
                    />
                </Box>
                <Text>Font size</Text>
                <Slider
                    aria-label="fontSize"
                    colorScheme="teal"
                    defaultValue={20}
                    min={5}
                    max={75}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onChange={(val) => setFontSize(val)}
                >
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <Tooltip
                        hasArrow
                        bg="teal.500"
                        color="white"
                        placement="top"
                        isOpen={showTooltip}
                        label={`${fontSize}`}
                    >
                        <SliderThumb />
                    </Tooltip>
                </Slider>
            </Box>
        </>
    );
};

export default App;
