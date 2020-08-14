#!/usr/bin/env node
"use strict";
const React = require("react");
const { render, Box, Text } = require("ink");

const App = () => (
	<Box
		flexDirection="column"
		width={70}
		borderStyle="classic"
		margin={2}
		padding={1}
	>
		<Box marginBottom={1}>
			<Box flexBasis="30%">
				<Text></Text>
			</Box>
			<Text>Mani Kiran / @nmanikiran</Text>
		</Box>
		<Box marginBottom={1}>
			<Box flexBasis="30%" justifyContent="flex-end">
				<Text>Work : </Text>
			</Box>
			<Text>
				Sr. Software Engineer <Text color="#F4CBB2">at</Text> Applaud HR{" "}
			</Text>
		</Box>
		<Box>
			<Box flexBasis="30%" justifyContent="flex-end">
				<Text>HackerRank : </Text>
			</Box>
			<Text>https://hackerrank.com/nmanikiran</Text>
		</Box>
		<Box>
			<Box flexBasis="30%" justifyContent="flex-end">
				<Text>Twitter : </Text>
			</Box>
			<Text color="#00ACEE">https://twitter.com/nmanikiran</Text>
		</Box>
		<Box>
			<Box flexBasis="30%" justifyContent="flex-end">
				<Text>GitHub : </Text>
			</Box>
			<Text color="#F4CBB2">https://github.com/nmanikiran</Text>
		</Box>

		<Box>
			<Box flexBasis="30%" justifyContent="flex-end">
				<Text>LinkedIn : </Text>
			</Box>
			<Text color="#0e76a8">https://linkedin.com/in/nmanikiran</Text>
		</Box>
		<Box>
			<Box flexBasis="30%" justifyContent="flex-end">
				<Text>freecodecamp : </Text>
			</Box>
			<Text>https://freecodecamp.org/nmanikiran</Text>
		</Box>

		<Box marginTop={1.2}>
			<Box flexBasis="30%" justifyContent="flex-end">
				<Text>Card : </Text>
			</Box>
			<Text>
				<Text color="red">npx</Text> nmanikiran
			</Text>
		</Box>
	</Box>
);

render(<App />);
