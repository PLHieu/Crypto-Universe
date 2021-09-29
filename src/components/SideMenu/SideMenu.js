import React from "react"
import {
  Box,
  ListItemText,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material"
import { MoveToInbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material"
import { Link } from "react-router-dom"
import useStyles from "./styles/sidemenu.style"

const drawerWidth = 240

const SideMenu = () => {
  const menu = [
    { text: "Home", link: "/" },
    { text: "Cryptocurrencies", link: "/cryptocurrencies" },
    { text: "Exchanges", link: "/exchanges" },
    { text: "News", link: "/news" },
  ]
  const classes = useStyles()

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menu.map((menuItem, index) => (
            <Link className={classes.itemText} to={menuItem.link} key={index}>
              <ListItem button>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText className={classes.itemText}>
                  {menuItem.text}
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default SideMenu
