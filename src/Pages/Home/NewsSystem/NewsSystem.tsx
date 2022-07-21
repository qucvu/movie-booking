import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";
import { CouponAPIs, ReviewAPIs, FilmsAPI } from "./NewsAPI";
import NewsList from "./NewsList";
import { TabPanel, a11yProps } from "Pages/Home/CinemaSystem/Tabs";

const StyledTab = styled(Tab)`
  color: #000;
  height: 24px;
  transition: all 0.4s;
  line-height: 24px;
  text-transform: unset;
  font-size: 1.3rem;
  min-width: 200px;
  &:hover {
    font-size: 1.5rem;
  }
  &.Mui-selected {
    color: #fb4226;
  }
`;

const WrappedTabItem = styled(Box)`
  display: flex;
  padding: 2rem 0;
`;

const StyledTabs = styled(Tabs)`
  .MuiTabs-indicator {
    background-color: #fb4226;
  }
`;
const StyledButton = styled(Button)`
  width: 8rem;
  color: #949494;
  border-color: #949494;
  &:hover {
    color: #fff;
    background: #fb4226;
    border-color: #fb4226;
  }
`;

type Props = {};

const NewsSystem = (props: Props) => {
  const [value, setValue] = useState(0);
  const [hiddenTabs, setHiddenTabs] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const toggleHiddenTabs = () => {
    if (hiddenTabs) {
      setIsLoading(true);
      setTimeout(() => {
        setHiddenTabs(!hiddenTabs);
        setIsLoading(false);
      }, 1000);
    }
    setHiddenTabs(!hiddenTabs);
  };

  return (
    <Box id="news" sx={{ py: 5, bgcolor: "paper.main" }}>
      <Container maxWidth="lg">
        <Box sx={{ width: "100%" }}>
          <Box>
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="Tabs news"
              centered
            >
              <StyledTab label="Điện Ảnh 24h" {...a11yProps(0)} />
              <StyledTab label="Review" {...a11yProps(1)} />
              <StyledTab label="Khuyến mãi" {...a11yProps(2)} />
            </StyledTabs>
          </Box>
          {isLoading ? (
            <Box textAlign="center">
              <CircularProgress color="error" />
            </Box>
          ) : (
            !hiddenTabs && (
              <WrappedTabItem>
                <TabPanel value={value} index={0}>
                  <NewsList list={FilmsAPI} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <NewsList list={ReviewAPIs} reactData />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <NewsList list={CouponAPIs} reactData />
                </TabPanel>
              </WrappedTabItem>
            )
          )}
          <Box textAlign="center">
            <StyledButton
              variant="outlined"
              color="error"
              onClick={() => toggleHiddenTabs()}
              size="large"
            >
              {hiddenTabs ? " XEM THÊM" : "RÚT GỌN"}
            </StyledButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsSystem;
