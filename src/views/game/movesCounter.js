/* @flow */
import React from 'react';
import pure from 'recompose/pure';

import Section from '../../components/section';
import Text from '../../components/text';
import globalStyles from '../../style';

type Props = {
  saveTime: Function,
  time: number,
}

const MovesCounter: Function = ({ moves }: Props): React.Element<any> => (
  <Section customStyle={globalStyles.flexCenter}>
    <Text> Moves: { moves } </Text>
  </Section>
);

export default pure(MovesCounter);
