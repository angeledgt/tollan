module.exports = {
  hooks: {
    readPackage(pkg) {
      // Permitir que sharp ejecute sus scripts de build
      if (pkg.name === 'sharp') {
        pkg.scripts = pkg.scripts || {}
      }
      return pkg
    }
  }
}
