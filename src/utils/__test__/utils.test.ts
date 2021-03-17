import { successData } from '../../redux/sagas/__test__/mock-data';
import { sortingVariants, YEAR_ASC, YEAR_DESC, NAME_ASC, NAME_DESC } from '../sort';

describe('Testing sort functions', () => {
  const unSortedData = successData.Search;
  const unSortedYears: Array<number> = unSortedData.map(item => parseInt(item.Year));
  const unSortedTitles: Array<string> = unSortedData.map(item => item.Title);
  const sortedAscTitles: Array<string> = [...unSortedTitles].sort((a, b) => a.localeCompare(b));
  const sortedDescTitles: Array<string> = [...unSortedTitles].sort((a, b) => b.localeCompare(a));
  const maxYear = Math.max(...unSortedYears);
  const minYear = Math.min(...unSortedYears);
  
  test('YEAR_ASC should sort an unSortedData in ascending order by years', () => {
    expect(parseInt(unSortedData.sort(sortingVariants[YEAR_ASC])[0].Year)).toBe(minYear);
    expect(parseInt(unSortedData.sort(sortingVariants[YEAR_ASC])[unSortedData.length - 1].Year)).toBe(maxYear);
  });

  test('YEAR_DESC should sort an unSortedData in descending order by years', () => {
    expect(parseInt(unSortedData.sort(sortingVariants[YEAR_DESC])[0].Year)).toBe(maxYear);
    expect(parseInt(unSortedData.sort(sortingVariants[YEAR_DESC])[unSortedData.length - 1].Year)).toBe(minYear);
  });

  test('NAME_ASC should sort an unSortedData in descending order by years', () => {
    expect(unSortedData.sort(sortingVariants[NAME_ASC])[0].Title).toBe(sortedAscTitles[0]);
    expect(unSortedData.sort(sortingVariants[NAME_ASC])[unSortedData.length - 1].Title).toBe(sortedAscTitles[sortedAscTitles.length - 1]);
    expect(unSortedData.sort(sortingVariants[NAME_ASC])[0].Title).toBe(sortedDescTitles[sortedDescTitles.length - 1]);
    expect(unSortedData.sort(sortingVariants[NAME_ASC])[unSortedData.length - 1].Title).toBe(sortedDescTitles[0]);
  });

  test('NAME_DESC should sort an unSortedData in descending order by years', () => {
    expect(unSortedData.sort(sortingVariants[NAME_DESC])[0].Title).toBe(sortedDescTitles[0]);
    expect(unSortedData.sort(sortingVariants[NAME_DESC])[unSortedData.length - 1].Title).toBe(sortedDescTitles[sortedDescTitles.length - 1]);
    expect(unSortedData.sort(sortingVariants[NAME_DESC])[0].Title).toBe(sortedAscTitles[sortedAscTitles.length - 1]);
    expect(unSortedData.sort(sortingVariants[NAME_DESC])[unSortedData.length - 1].Title).toBe(sortedAscTitles[0]);
  });
});
