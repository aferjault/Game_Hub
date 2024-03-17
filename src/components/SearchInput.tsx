import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement
            children={<BsSearch />}
            pointerEvents="none"
          ></InputLeftElement>
          <Input
            ref={ref}
            borderRadius={20}
            variant="filled"
            type="tel"
            placeholder="Search games..."
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
