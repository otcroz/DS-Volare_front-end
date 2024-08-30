import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
  TitleText,
  ContentBox,
  GlassBox,
} from '../../../styles/convertBoxStyles';
import { motion } from 'framer-motion';
import { useAnimationContext } from '../../../context/animationContext';
import Mindmap from './Mindmap';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../utils/queryKeys';
import { useConvert } from '../../../hooks/useConvert';
import Spinner from '../../base/Spinner';
import { spinnerText } from '../../../utils/spinnerText';
import RateChart from './RateChart';
import { useScriptIdData } from '../../../context/convertDataContext';

type props = {
  data: string;
};

const StatisticsBox = forwardRef<HTMLDivElement, props>(({ data }, ref) => {
  const { controlStatistics } = useAnimationContext();
  const { apperanceRate } = useConvert();
  const { scriptId } = useScriptIdData();

  const appearanceQuery = useQuery({
    queryKey: queryKeys.appearance,
    queryFn: () => apperanceRate(scriptId),
    enabled: scriptId !== 0,
  });

  return (
    <motion.div ref={ref} animate={controlStatistics} style={{ opacity: 0 }}>
      <GlassBox hasData={true}>
        <TitleText>통계</TitleText>
        <ContentBox style={{ overflowY: 'scroll' }}>
          {!appearanceQuery.isFetching && appearanceQuery.data ? (
            <>
              <Mindmap />
              <RateChart result={appearanceQuery.data.result} />
            </>
          ) : (
            <Spinner text={spinnerText.statistics} />
          )}
        </ContentBox>
      </GlassBox>
    </motion.div>
  );
});

export default StatisticsBox;
