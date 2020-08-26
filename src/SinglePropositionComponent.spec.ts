import SinglePropositionComponent from './SinglePropositionComponent.svelte'
import { render } from '@testing-library/svelte'

it('it works', () => {
  const proposition = {
    id: "131",
    type: "single",
    text: "Cras commodo tempor elementum. Morbi tempor ante sed ligula iaculis dapibus. Maecenas ut dolor eget mi mattis auctor eu sed ligula. Donec id posuere nisl. Cras quis felis enim."
  }
  const { getByText } = render(SinglePropositionComponent, { proposition })

  const text = getByText(proposition.text)

  expect(text).toBeDefined();
  // expect(text).toBeVisible(); // ISSUE : works when running but not in VS CODE
})