import React from "react"
import {
  ListItemText,
  ListItem,
  ListItemIcon,
  AppBar,
  Box,
} from "@mui/material"
import { MoveToInbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material"
import { Link } from "react-router-dom"
import useStyles from "./styles/sidemenu.style"

const SideMenu = ({ height }) => {
  const menu = [
    { text: "Home", link: "/" },
    { text: "Cryptocurrencies", link: "/cryptocurrencies" },
    { text: "Exchanges", link: "/exchanges" },
    { text: "News", link: "/news" },
  ]
  const classes = useStyles()

  return (
    <AppBar
      position="fixed"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: `${height}px`,
      }}
    >
      <Box
        component="img"
        sx={{
          position: "absolute",
          top: "auto",
          bottom: "auto",
          left: "8px",
          height: "80%",
        }}
        src="https://cryptoverse-jsm.netlify.app/static/media/cryptocurrency.1548aced.png"
      ></Box>
      {menu.map((menuItem, index) => (
        <Link className={classes.itemText} to={menuItem.link} key={index}>
          <ListItem
            button
            sx={{
              padding: `16px !important`,
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                marginRight: 1,
                minWidth: 0,
              }}
            >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText>{menuItem.text}</ListItemText>
          </ListItem>
        </Link>
      ))}
    </AppBar>
  )
}

export default SideMenu
