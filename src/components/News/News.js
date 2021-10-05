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
  Box,
} from "@mui/material"
import React, { useEffect } from "react"
import moment from "moment"
import useStyles from "./styles/news.style"
import { useDispatch, connect } from "react-redux"
import { getNews } from "../../store/actions/newsAction"

const News = ({ keyword, news }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNews(keyword))
  }, [keyword, dispatch])

  if (!news || news.length === 0) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 300,
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          margin: "32px 0 16px",
        }}
      >
        Latest Crypto News
      </Typography>
      <Grid container spacing={5}>
        {news?.map((item, i) => (
          <Grid item lg={4} md={6} xs={12} key={i}>
            <a href={item.url} className={classes.link}>
              <Card
                sx={{
                  boxShadow: `0 8px 40px -12px black`,
                  borderRadius: 2,
                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: `0 18px 50px -12px black`,
                  },
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      src={item.provider[0]?.image?.thumbnail?.contentUrl}
                    />
                  }
                  title={item.provider[0].name}
                  subheader={moment(item.datePublished)
                    .startOf("hour")
                    .fromNow()}
                />
                <CardContent
                  sx={{
                    position: "relative",
                    height: 250,
                  }}
                >
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
                  <Box
                    sx={{
                      position: "absolute",
                      display: "block",
                      width: "100%",
                      height: "100px",
                      bottom: 0,
                      left: 0,
                      background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)`,
                    }}
                  ></Box>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const mapStateToProps = (state) => ({
  news: state.news.news,
})

export default connect(mapStateToProps)(News)
