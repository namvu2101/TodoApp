import React from 'react'
import {ViewStyle, StyleProp, ViewProps} from 'react-native'
import {View} from 'react-native'
interface PropsViewCore extends ViewStyle {
  children?: React.ReactNode
  width?: number | string
  height?: number | string
  square?: number
  mid?: boolean
  row?: boolean
  style?: StyleProp<ViewStyle>
  flex1?: boolean
  flex2?: boolean
  flex3?: boolean
  flex4?: boolean
  flex5?: boolean
  flex6?: boolean
  flex7?: boolean
  flex8?: boolean
  flex9?: boolean
  centerHorizontal?: boolean
  flex?: number
  propsView?: ViewProps
}
export const ViewC: React.FC<PropsViewCore> = props => {
  const styleProps: Array<any> = [
    props.mid && {alignItems: 'center', justifyContent: 'center'},
    props.flex1 && {flex: 1},
    props.flex2 && {flex: 2},
    props.flex3 && {flex: 3},
    props.flex4 && {flex: 4},
    props.flex5 && {flex: 5},
    props.flex6 && {flex: 6},
    props.flex7 && {flex: 7},
    props.flex8 && {flex: 8},
    props.flex9 && {flex: 9},
    props.row && {flexDirection: 'row'},
    props.square && {width: props.square, height: props.square},
    props.centerHorizontal && {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  ]
  return (
    <View style={[styleProps, {...props}, props.style]} {...props.propsView}>
      {props.children}
    </View>
  )
}

export default ViewC
/*************** */
function ViewC2 () {
  return <ViewC propsView={{pointerEvents: 'none'}} />
}
