import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

import { Container, SimpleGrid, Spinner } from "@chakra-ui/react";

import EndMsg from "../components/EndMsg";
import User from "../components/User";

function Home({ history }) {
  const [items, setItems] = useState([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(1);


  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`https://randomuser.me/api/?_page=1&results=20`);
      const data = await res.json();
      setItems(data.results);
    };

    getUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(
      `https://randomuser.me/api/?_page=${page}&results=20`
    );
    const data = await res.json();
    console.log(data);
    return data.results;
  };

  const fetchData = async () => {
    const UserLists = await fetchUsers();

    setItems([...items, ...UserLists]);
    if (UserLists.length === 0 || UserLists.length < 20) {
      sethasMore(false);
    }
    setpage(page + 1);
  };
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<Spinner color="pink.500" />}
      endMessage={<EndMsg />}
    >
      <Container
        maxW={"xl"}
        width={{ base: "100%", sm: "100%", md: "85%" }}
        mt={10}
        border={"1px solid #a30707"}
      >
        <SimpleGrid columns={1} spacing={4} p={8} mb={8}>
          {items.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </SimpleGrid>
      </Container>
    </InfiniteScroll>
  );
}

export default Home;
