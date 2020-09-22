import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Section, Container, Row, TextColumn, CardColumn, MiniTitle, Title, ColumnText } from './styles'
import Button from 'components/button'
import ScrollMenu from 'components/scrollMenu'


function Section3() {
    const intl = useIntl()
    const format = { bold: chunks => <strong>{chunks}</strong> }
    const items1 = [
        "section3.first.1",
        "section3.first.2",
        "section3.first.3",
        "section3.first.4",
    ]
    const items2 = [
        "section3.second.1",
        "section3.second.5",
        "section3.second.3",
        "section3.second.4",
        "section3.second.2",
    ]

    return (
        <Section>
            <Container>
                <MiniTitle>
                    <FormattedMessage id="section3.mini.title" />
                </MiniTitle>
            </Container>
            <Container>
                <Title>
                    <FormattedMessage id="section3.title" />
                </Title>
            </Container>
            <Container>
                <Row responsiveColumn>
                    <TextColumn className="column margin">
                        <ColumnText>
                            <FormattedMessage id="section3.first" values={format} />
                        </ColumnText>
                    </TextColumn>
                    <CardColumn className="column">
                        <ScrollMenu items={items1} />
                    </CardColumn>
                </Row>
            </Container>
            <Container marginTop="50">
                <Row responsiveColumn>
                    <TextColumn className="column margin">
                        <ColumnText>
                            <FormattedMessage id="section3.second" values={format} />
                        </ColumnText>
                    </TextColumn>
                    <CardColumn className="column">
                        <ScrollMenu canOverflow={true} items={items2} />
                    </CardColumn>
                </Row>
            </Container>
            <Container  marginTop="50">
                <Button text={intl.formatMessage({id: 'button.all'})} />
            </Container>
        </Section>
    )
}


export default Section3