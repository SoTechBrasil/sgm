const AuthorizationUserMiddleware = (requiredPermissions = []) => {
    return (req, res, next) => {
        try {
            if(!req.user){
                return res.status(401).json({
                    message: "Usuario nao autorizado",
                    success: false
                });
            }

            const userRole = req.user.role;
            const rolePermissions = {
                'admin': ['read', 'write', 'edit', 'delete'],
                'manage': ['read', 'write', 'edit'],
                'garcom': ['read', 'write'],
                'cozinha': ['read'],
                'caixa': ['read', 'write']
            };

            const userPermissions = rolePermissions[userRole] || [];
            const hasPermission = requiredPermissions.every(p => userPermissions.includes(p));

            if(!hasPermission){
                return res.status(403).json({ mensagem: 'Acesso negado.', success: false });
            }

            next();
        } catch (error) {
            console.error(error);
            res.status(403).json({ mensagem: 'Acesso negado.', success: false });
        }
    }
}

module.exports = AuthorizationUserMiddleware;