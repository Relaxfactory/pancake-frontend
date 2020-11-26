import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, CardFooter, Button, Text, PancakeRoundIcon } from '@pancakeswap-libs/uikit'
import { useWallet } from 'use-wallet'
import useI18n from 'hooks/useI18n'
import PrizeGrid from './PrizeGrid'
import DetailsButton from './DetailsButton'

const CardHeading = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`

const Right = styled.div`
  display: flex;
`

const Left = styled.div`
  display: flex;
`

const IconWrapper = styled.div`
  margin-right: 16px;
  svg {
    width: 48px;
    height: 48px;
  }
`

const PrizeCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ExpandingWrapper = styled.div<{ hideFooter: boolean }>`
  height: ${(props) => (props.hideFooter ? '0px' : '100%')};

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 100%;
  }
`

const FarmedStakingCard = () => {
  const { account } = useWallet()
  const TranslateString = useI18n()
  const [hideFooter, setHideFooter] = useState(true)

  return (
    <Card>
      <CardBody>
        <CardHeading>
          <Left>
            <IconWrapper>
              <PancakeRoundIcon />
            </IconWrapper>
            <PrizeCountWrapper>
              <Text fontSize="14px" color="textSubtle">
                Total Prizes:
              </Text>
              <Heading size="lg">100,000 {TranslateString(0, 'CAKE')}</Heading>
            </PrizeCountWrapper>
          </Left>
          <Right>
            <DetailsButton onClick={() => setHideFooter(!hideFooter)} />
          </Right>
        </CardHeading>
      </CardBody>
      <ExpandingWrapper hideFooter={hideFooter}>
        <CardFooter>
          <PrizeGrid />
        </CardFooter>
      </ExpandingWrapper>
    </Card>
  )
}

export default FarmedStakingCard
