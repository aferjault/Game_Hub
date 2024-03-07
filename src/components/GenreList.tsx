import {
  List,
  Image,
  HStack,
  ListItem,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenres, { Genre } from "../hooks/useGenres";
import { useState } from "react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const [genre, setGenre] = useState(undefined);
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
              value="genre"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
