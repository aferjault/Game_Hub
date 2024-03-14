import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => (
  <>
    <InputGroup>
      <InputLeftElement
        children={<BsSearch />}
        pointerEvents="none"
      ></InputLeftElement>
      <Input
        borderRadius={20}
        variant="filled"
        type="tel"
        placeholder="Search games..."
      />
    </InputGroup>
  </>
);

export default SearchInput;
