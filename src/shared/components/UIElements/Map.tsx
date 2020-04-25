import React, { useRef, useEffect } from 'react'
import styled from '../../../styled'

type Props = {} & google.maps.MapOptions

const Map = ({ center, zoom }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const map = new google.maps.Map(mapRef.current as HTMLDivElement, {
      center,
      zoom,
    })

    new google.maps.Marker({ position: center, map })
  }, [center, zoom])

  return <Box ref={mapRef}>TEST</Box>
}

const Box = styled.div`
  height: 100%;
  width: 100%;
`

export default Map
