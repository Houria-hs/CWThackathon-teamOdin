import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, backgroundColor: '#FFFFFF', fontFamily: 'Helvetica' },
  header: { fontSize: 24, marginBottom: 20, color: '#1A365D', fontWeight: 'bold' },
  meta: { fontSize: 10, color: '#718096', marginBottom: 30 },
  riskCard: { 
    marginBottom: 15, 
    padding: 15, 
    borderRadius: 8, 
    borderLeft: 8 
  },
  highRisk: { backgroundColor: '#FFF5F5', borderLeftColor: '#E53E3E' },
  mediumRisk: { backgroundColor: '#FFFAF0', borderLeftColor: '#DD6B20' },
  label: { fontSize: 10, fontWeight: 'bold', color: '#4A5568', textTransform: 'uppercase' },
  clause: { fontSize: 12, marginTop: 5, fontStyle: 'italic' },
  explanation: { fontSize: 11, marginTop: 8, color: '#2D3748' },
  footer: { position: 'absolute', bottom: 30, left: 40, right: 40, fontSize: 9, color: '#A0AEC0', textAlign: 'center', borderTop: 1, paddingTop: 10 }
});

export const ResultExport = ({ chunks, fileName }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Legal Risk Review</Text>
      <Text style={styles.meta}>Document: {fileName} | Date: {new Date().toLocaleDateString()}</Text>

      {chunks.filter(c => c.risk !== "Low").map((chunk, i) => (
        <View key={i} style={[styles.riskCard, chunk.risk === 'High' ? styles.highRisk : styles.mediumRisk]}>
          <Text style={styles.label}>{chunk.risk} Risk Identified</Text>
          <Text style={styles.clause}>"{chunk.text}"</Text>
          <Text style={styles.explanation}>{chunk.explanation}</Text>
        </View>
      ))}

      <Text style={styles.footer}>
        Clear Clause AI - Private & Confidential. This report is AI-generated and not legal advice.
      </Text>
    </Page>
  </Document>
);