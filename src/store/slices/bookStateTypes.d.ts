import { Rendition } from 'epubjs'
import { LOADSTATE } from './constants'
import { bookStateStructure } from "./EpubJSBackend/epubjsManager.d.ts"

interface BackendInstance{
  instance: Rendition
  UID: number,
  hash: string,
  title: string,
  renderMode?: string,
  readerMargins?: number,
  initialLoadState: LOADSTATE
}

export interface BookInstances {
  [key: string]: bookStateStructure | unknown // some other rendering backend
}