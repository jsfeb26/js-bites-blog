import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'
import PageNotFound from '../images/ndt-404.png';

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data
    const is404 = post.path === '/404.html';

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1 style={{marginTop: 0}}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        {!is404 &&
          <div>
            <em
              style={{
                display: 'block',
                marginBottom: rhythm(2),
              }}
            >
              Posted {moment(post.date).format('MMMM D, YYYY')}
            </em>
            <hr
              style={{
                marginBottom: rhythm(2),
              }}
            />
            <ReadNext post={post} pages={route.pages} />
            <Bio />
          </div>
        }
        {is404 &&
          <div
            style={{
              textAlign: 'center'
            }}
          >
            <img
              style={{
                width: '485px'
              }}
              src={PageNotFound}
            />
          </div>
        }
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
