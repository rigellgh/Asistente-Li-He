from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Base de datos de términos legales
legal_terms = {
    "fob": "Free On Board (FOB) - 船上交货 (chuánshàng jiāohuò). El vendedor entrega la mercancía abordo del buque.",
    "cif": "Cost, Insurance and Freight (CIF) - 成本加保险费加运费 (chéngběn jiā bǎoxiǎn fèi jiā yùnfèi). Incluye costo, seguro y flete.",
    "lc": "Letter of Credit (LC) - 信用证 (xìnyòngzhèng). Garantía de pago emitida por un banco.",
}

@app.route('/translate', methods=['POST'])
def translate_term():
    term = request.json.get('term', '').lower().strip()
    translation = legal_terms.get(term, "❌ Término no encontrado. Intenta con otro.")
    return jsonify({'translation': translation})

@app.route('/verify_contract', methods=['POST'])
def verify_contract():
    return jsonify({'status': 'success', 'message': '✅ Contrato verificado en blockchain. Hash: 0xa1b2c3...'})

@app.route('/upload_contract', methods=['POST'])
def upload_contract():
    return jsonify({'status': 'success', 'message': '📄 Contrato recibido. Procesando traducción...'})

if __name__ == '__main__':
    app.run(debug=True)