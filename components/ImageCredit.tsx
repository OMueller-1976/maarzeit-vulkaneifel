export default function ImageCredit({ credit }: { credit: string }) {
  return (
    <p style={{ fontSize: '0.68rem', color: '#aaa', textAlign: 'right', marginTop: '2px', paddingRight: '4px' }}>
      © {credit}
    </p>
  )
}
