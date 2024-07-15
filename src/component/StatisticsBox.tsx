import React, { forwardRef } from 'react';
import styled from 'styled-components';
import ConvertBoxWrapper from './ConvertBoxWrapper';
import { TitleText, ContentBox } from '../styles/convertBoxStyles';
import { motion } from 'framer-motion';
import { useAnimationContext } from '../context/animationContext';

type props = {
  data: string;
};

const StatisticsBox = forwardRef<HTMLDivElement, props>(({ data }, ref) => {
  const { controlStoryboard } = useAnimationContext();
  return (
    <motion.div ref={ref} animate={controlStoryboard} style={{ opacity: 0 }}>
      <ConvertBoxWrapper>
        <TitleText>통계</TitleText>
        <ContentBox></ContentBox>
      </ConvertBoxWrapper>
    </motion.div>
  );
});

export default StatisticsBox;
