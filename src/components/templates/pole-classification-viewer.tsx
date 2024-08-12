import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

interface DataRow {
  class: string;
  qav: string;
  qc: string;
  rg: string;
  name: string;
  average: string;
  concept: string;
  dob: string;
  polo: string; 
  status: string;
}

interface PoleClassificationViewerProps {
  data: { [key: string]: DataRow[] };
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderStyle: 'solid',
  },
  tableCell: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 8,
    textAlign: 'center',
    fontSize: 8,
  },
  lastTableCell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    fontSize: 8,
  },
}); 

export function PoleClassificationViewer({ data }: PoleClassificationViewerProps) {
  return (
    <Document>
      <Page size={{ width: 800, height: 1200 }} style={styles.page}>
        {Object.entries(data).map(([polo, rows]) => (
          <View style={styles.section} key={polo}>
            <Text style={styles.title}>Classificação por Polo: {polo}</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>CLASS</Text>
                <Text style={styles.tableCell}>Q.AV</Text>
                <Text style={styles.tableCell}>Q.C</Text>
                <Text style={styles.tableCell}>RG</Text>
                <Text style={styles.tableCell}>NOME COMPLETO</Text>
                <Text style={styles.tableCell}>MÉDIA FINAL</Text>
                <Text style={styles.tableCell}>CONCEITO</Text>
                <Text style={styles.tableCell}>DATA DE NASCIMENTO</Text>
                <Text style={styles.tableCell}>POLO</Text>
                <Text style={styles.lastTableCell}>STATUS</Text>
              </View>
              {rows.map((row, index) => (
                <View style={styles.tableRow} key={index}>
                  <Text style={styles.tableCell}>{row.class}</Text>
                  <Text style={styles.tableCell}>{row.qav}</Text>
                  <Text style={styles.tableCell}>{row.qc}</Text>
                  <Text style={styles.tableCell}>{row.rg}</Text>
                  <Text style={styles.tableCell}>{row.name}</Text>
                  <Text style={styles.tableCell}>{row.average}</Text>
                  <Text style={styles.tableCell}>{row.concept}</Text>
                  <Text style={styles.tableCell}>{row.dob}</Text>
                  <Text style={styles.tableCell}>{row.polo}</Text>
                  <Text style={styles.lastTableCell}>{row.status}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
     </Page>
    </Document>
  );
}
