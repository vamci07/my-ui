import React, { memo, useState } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  ClickAwayListener,
  Paper,
  MenuItem,
  Container
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import heroSvg from "../../static/backgrounds/Liquid-Cheese.svg";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 240,
    backgroundImage: `url(${heroSvg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  input: {
    border: "none",
    background: "rgba(255,255,255, .2)",
    padding: theme.spacing(3, 2),
    boxShadow: "none",
    borderRadius: 0,
    fontFamily: "Lato",
    fontSize: theme.typography.pxToRem(24),
    color: theme.palette.common.white,
    outline: 0,
    width: "100%",
    "&::placeholder": {
      color: theme.palette.common.white,
      opacity: 1
    },
    "&:hover, &:focus": {
      borderBottom: `2px solid ${theme.palette.common.white}`
    }
  },
  container: {
    width: "100%",
    padding: theme.spacing(3, 10),
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  searchWrapper: {
    height: 60,
    width: 60,
    backgroundColor: blue[500],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.spacing(0.5),
    cursor: "pointer",
    "& svg": {
      fontSize: theme.typography.pxToRem(24)
    }
  },
  card: {
    boxShadow: "none",
    border: `1px solid ${theme.palette.divider}`
  },
  paper: {
    width: "calc(100% - 48px)",
    position: "absolute",
    marginTop: 4,
    borderRadius: theme.spacing(0.5),
    zIndex: 1,
    maxHeight: 332,
    overflow: "hidden"
  },
  resultsWrapper: {
    width: "100%",
    maxHeight: 332,
    overflowY: "auto"
  },
  menuItem: {
    fontSize: theme.typography.pxToRem(20),
    padding: theme.spacing(1.5, 2),
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}));

function Info() {
  const [expandSearch, setExpandSearch] = useState(false);
  const [queryString, setQueryString] = useState(undefined);

  function handleExpandSearch() {
    setExpandSearch(true);
  }

  function handleClickAway() {
    setExpandSearch(false);
    setQueryString(undefined);
  }

  function handleQueryString(event) {
    setQueryString(event.target.value);
  }

  const styles = useStyles();
  return (
    <Box>
      <Box className={styles.root}>
        {expandSearch ? (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box>
              <input
                className={styles.input}
                type="text"
                value={queryString}
                placeholder="Enter Search Text"
                onChange={handleQueryString}
                autoFocus
              />
              {queryString && queryString.length > 3 ? (
                <Container>
                  <Paper className={styles.paper}>
                    <Box className={styles.resultsWrapper}>
                      <MenuItem className={styles.menuItem}>
                        Search Result 1
                      </MenuItem>
                      <MenuItem className={styles.menuItem}>
                        Search Result 2
                      </MenuItem>
                      <MenuItem className={styles.menuItem}>
                        Search Result 3
                      </MenuItem>
                      <MenuItem className={styles.menuItem}>
                        Search Result 4
                      </MenuItem>
                      <MenuItem className={styles.menuItem}>
                        Search Result 5
                      </MenuItem>
                      <MenuItem className={styles.menuItem}>
                        Search Result 6
                      </MenuItem>
                    </Box>
                  </Paper>
                </Container>
              ) : null}
            </Box>
          </ClickAwayListener>
        ) : (
          <Box className={styles.container}>
            <Box>
              <Typography variant="h4">Title</Typography>
              <Typography variant="subtitle1">SubTitle</Typography>
            </Box>
            <Box className={styles.searchWrapper} onClick={handleExpandSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </Box>
          </Box>
        )}
      </Box>
      <Box px={10} mt={-10}>
        <Card className={styles.card}>
          <CardHeader title="Responsive Card with negative margin"></CardHeader>
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" color="primary">
              Learn more
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}

export default memo(Info);
