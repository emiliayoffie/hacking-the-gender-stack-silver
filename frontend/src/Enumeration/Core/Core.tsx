import React from 'react';
import { Typography } from '@mui/material';
import classnames from 'classnames/bind';
import styles from '../../home/Home.module.scss';


const cx = classnames.bind(styles);

const Core = () => {
    return (
        <div className={cx('home-container')}>
      <Typography variant="h2" fontWeight={700} color="primary">
        {"Cores page"}
        <br />
        {"Core cards"}
      </Typography>

      <Typography variant="h6" component="span">
        {"core buttons"}
      </Typography>
    </div>
    );
};

export default Core;