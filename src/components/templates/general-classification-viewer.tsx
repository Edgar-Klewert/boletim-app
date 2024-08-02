import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20, 
    flexDirection: 'row'
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
    borderBottomColor: '#000000',
    borderStyle: 'solid',
  },
  tableCell: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#000000',
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

interface GeneralClassificationViewerProps {
  data: DataRow[];
}

const GeneralClassificationViewer: React.FC<GeneralClassificationViewerProps> = ({ data }) => (
  <Document>
    <Page size={{width:800, height: 1200}} style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Classificação Geral: CAS - 2023</Text>
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
          {data.map((row, index) => (
            <table key={index}>
            </table>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default GeneralClassificationViewer;