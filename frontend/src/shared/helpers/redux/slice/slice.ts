import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit"

export default buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator }
})
