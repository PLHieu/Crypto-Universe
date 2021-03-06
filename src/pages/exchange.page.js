import {
  Avatar,
  CircularProgress,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import millify from "millify"
import React, { useState } from "react"
import { useQuery } from "react-query"
import { GetCoinExchange } from "../services/cryptoApi"
import HTMLReactParser from "html-react-parser"

const Exchange = () => {
  const { data, isLoading, isError } = useQuery("exchange", GetCoinExchange, {
    refetchInterval: false,
  })

  if (isLoading) {
    return <CircularProgress />
  }

  if (isError) {
    return <div>Oops, There's some error </div>
  }

  const exchanges = data.data.exchanges

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Exchanges</TableCell>
            <TableCell>24h Trade Volume</TableCell>
            <TableCell>Markets</TableCell>
            <TableCell>Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exchanges.map((item) => (
            <Row key={item.id} item={item}></Row>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const Row = ({ item }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow
        onClick={() => setOpen((open) => !open)}
        sx={{
          transition: "0.4s",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "#e5e5e5",
            transition: "0.4s",
          },
          borderBottom: `1px solid #1976d2`,
        }}
      >
        <TableCell>
          <Avatar src={item.iconUrl} />
          {item.name}
        </TableCell>
        <TableCell>{millify(item.volume)}</TableCell>
        <TableCell>{millify(item.numberOfMarkets)}</TableCell>
        <TableCell>{millify(item.marketShare)} %</TableCell>
      </TableRow>
      <TableRow
        sx={{
          cursor: "pointer",
          padding: "8px",
          border: `1px solid #1976d2`,
        }}
      >
        <TableCell sx={{ padding: "0 32px 0" }} colSpan={4}>
          <Collapse in={open}>
            {Boolean(item.description)
              ? HTMLReactParser(item.description)
              : `No description`}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Exchange
