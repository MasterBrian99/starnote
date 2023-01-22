import { Avatar, Box, Header, TextInput } from '@primer/react';
import React from 'react';
import { CgSearch } from 'react-icons/cg';
const MainHeader = () => {
  return (
    <>
      <Header>
        <Header.Item full>
          <TextInput
            leadingVisual={() => (
              <Box pt={1}>
                <CgSearch size={20} />
              </Box>
            )}
          />
        </Header.Item>
        <Header.Item>
          <Avatar src="https://github.com/octocat.png" size={20} square alt="@octocat" />
        </Header.Item>
      </Header>
    </>
  );
};

export default MainHeader;
