import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { GetNews } from "../../services/newApi"
import moment from "moment"

const News = ({ keyword }) => {
  const { data, isLoading } = useQuery(["News", keyword], () =>
    GetNews(keyword)
  )
  const [news, setNews] = useState([])

  useEffect(() => {
    setNews(data?.value)
  }, [data])

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <Grid container spacing={2}>
      {news?.map((item, i) => (
        <Grid item md={4} xs={6} key={i}>
          <Card>
            <CardHeader
              avatar={
                <Avatar src={item.provider[0]?.image?.thumbnail?.contentUrl} />
              }
              title={item.provider[0].name}
              subheader={moment(item.datePublished).startOf("hour").fromNow()}
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <Typography variant="h6">{item.name}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <CardMedia
                    sx={{
                      borderRadius: "10px",
                    }}
                    component="img"
                    image={item?.image?.thumbnail?.contentUrl}
                    alt="Paella dish"
                  />
                </Grid>
              </Grid>
              <Divider />
              <Typography variant="body2" color="text.secondary">
                {item?.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default News
