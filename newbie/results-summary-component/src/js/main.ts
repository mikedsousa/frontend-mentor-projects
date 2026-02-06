const container = document.querySelector('[data-container') as HTMLElement;

const elements: Elements[] = [
  {
    category: 'Reaction',
    score: 80,
    color: 'light-red',
    icon: './assets/images/icon-reaction.svg'
  },
  
  {
    category: 'Memory',
    score: 92,
    color: 'orangey-yellow',
    icon: './assets/images/icon-memory.svg'
  },
  {
    category: 'Verbal',
    score: 61,
    color: 'green-teal',
    icon: './assets/images/icon-verbal.svg'
  },
  {
    category: 'Visual',
    score: 72,
    color: 'cobalt-blue',
    icon: './assets/images/icon-visual.svg'
  },

]

elements.map((element) => {
  container.innerHTML += `
    <div class="flex flex-row justify-between px-5 py-4 bg-${element.color} bg-opacity-10 rounded-xl">
          <p class="self-start align-middle text-${element.color} font-bold">
            <img class="inline-block align-middle" src=${element.icon} alt="icon" />
            ${element.category}
          </p>
          <p class="text-dark-gray-blue font-bold">
            ${element.score} <span class="text-dark-gray-blue opacity-40">/ 100</span>
          </p>
    </div>
  `
})
