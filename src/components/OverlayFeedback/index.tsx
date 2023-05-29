import { useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";
import { Canvas, Rect } from '@shopify/react-native-skia';
import { THEME } from "../../styles/theme";

const STATUS = ['transparent', THEME.COLORS.BRAND_LIGHT, THEME.COLORS.DANGER_LIGHT]

type Props = {
  status: number;
}

export function OverlayFeedback({ status }: Props) {
  const color = STATUS[status]

  // o hook para dimensions é flexível à orientação de uso da tela pelo usuário
  const { height, width } = useWindowDimensions()

  return (
    <Animated.View style={{ height, width, position: 'absolute' }}>
      <Canvas style={{ flex: 1 }}>
        <Rect 
          x={0}
          y={0}
          width={100}
          height={100}
          color={color}
        />
      </Canvas>
    </Animated.View>
  )
}