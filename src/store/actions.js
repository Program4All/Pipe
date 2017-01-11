/**
 * Created by brambles on 2016/11/1.
 */
"use strict"

const setTitle = ({dispatch}, title) => {
  dispatch('SET_TITLE', title)
}

export default { setTitle }
