import { PAGE_LIMIT } from './consts';

function getPagesCount(cameraCount: number): number {
  return Math.ceil(cameraCount / PAGE_LIMIT);
}

function getNumeric(page: string) {
  return Number(page.replace( /^\D+/g, ''));
}

export { getPagesCount, getNumeric};

