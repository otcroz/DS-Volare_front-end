import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { TitleText, ContentBox, GlassBox } from '../styles/convertBoxStyles';
import { motion } from 'framer-motion';
import { useAnimationContext } from '../context/animationContext';

type props = {
  data: string;
};

const StatisticsBox = forwardRef<HTMLDivElement, props>(({ data }, ref) => {
  const { controlStatistics } = useAnimationContext();
  return (
    <motion.div ref={ref} animate={controlStatistics} style={{ opacity: 0 }}>
      <GlassBox hasData={true}>
        <TitleText>통계</TitleText>
        <ContentBox></ContentBox>
      </GlassBox>
    </motion.div>
  );
});

export default StatisticsBox;
